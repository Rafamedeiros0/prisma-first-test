const { PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();



async function main(){
    const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: true},
    })
    console.log(post)
    
    // await prisma.user.create({
    //     data: {
    //         name: "Alice",
    //         email: "alice@prisma.io",
    //         posts: {
    //             create: { title: "Hello World"},
    //         },
    //         profile: {
    //             create: { bio: "I like turtles"}
    //         }
    //     }
    // })

    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true
    //     },
    // });
    // console.dir(allUsers, { depth: null });
};

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    });