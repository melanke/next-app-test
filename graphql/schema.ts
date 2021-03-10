import { objectType, queryType, mutationType, makeSchema, nullable, stringArg } from '@nexus/schema';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';

const Query = queryType({
  definition(t) {
    t.list.field('allUsers', {
        type: 'User',
        resolve(_parent, {email}, ctx) {
            return ctx.prisma.user.findMany({where: {email: email ?? undefined}});
        },
        args: {email: nullable(stringArg())}
    });
    // t.list.field('allPrincipals', {
    //     type: 'Principal',
    //     resolve(_parent, _args, ctx) {
    //         return ctx.prisma.principal.findMany({});
    //     },
    // });
    t.crud.user();
    t.crud.users();
    t.crud.principals();
    t.crud.grupoDoPrincipals();
  }
});

const Mutation = mutationType({
    definition(t) {
      t.field('bigRedButton', {
        type: 'String',
        async resolve(_parent, _args, ctx) {
          const { count } = await ctx.prisma.user.deleteMany({});
          return `${count} user(s) destroyed. Thanos will be proud.`;
        }
      });
  
      t.crud.createOneUser();
      t.crud.deleteOneUser();
      t.crud.deleteManyUser();
      t.crud.updateOneUser();
      t.crud.updateManyUser();
    }
  });

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.idUserPk();
        t.model.email();    
    }
})

const Principal = objectType({
  name: 'Principal',
  definition(t) {
      t.model.idPrincipalPk();
      t.model.titulo();
      t.model.grupoDoPrincipal();
  }
})

const GrupoDoPrincipal = objectType({
  name: 'GrupoDoPrincipal',
  definition(t) {
      t.model.idGrupoDoPrincipalPk();
      t.model.titulo();
  }
})


export const schema = makeSchema({
  types: [User, Principal, GrupoDoPrincipal, Query, Mutation],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: path.join(process.cwd(), 'graphql', 'context.ts'),
        alias: 'Context'
      }
    ]
  }
});