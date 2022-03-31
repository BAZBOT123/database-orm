const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
        }
    });

    console.log('Customer created', createdCustomer);



    // Add your code here
    const createdContact = await prisma.contact.create({
        data: {
            phone: '999',
            email: 'test@123.com',
            customerId: createdCustomer.id
        }
    })
    console.log('Contact created', createdContact);


    // a better way to add customer and contact relations
    const createdSecondContact = await prisma.customer.create({
        data: {
            name: 'Barry',
            contact: {
                create: {
                    phone: '911',
                    email: 'test2@123.com'
                }
            }
        }
    })
    console.log('Second contact created', createdSecondContact);


    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Top Boy',
            runtimeMins: 120,
        }
    })
    console.log('created movie', createdMovie)



    const createScreen = await prisma.screen.create({
        data: {
            number: 100
        }
    })
    console.log('created screen', createScreen)

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: new Date(),
            movie: {
                connect: {
                    id: createdMovie.id
                }
            },
            screen: {
                connect: {
                    id: createScreen.id
                }
            }
        }
    })
    console.log('created screening', createdScreening)


    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                connect: {
                    id: createdCustomer.id
                }
            },
            screening: {
                connect: {
                    id: createdScreening.id
                }
            }
        }
    })
    console.log('created ticket', createdTicket)



    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
