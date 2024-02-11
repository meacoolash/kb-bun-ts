function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

async function asyncCallWithThen(): Promise<void> {
    console.log('calling');
    return resolveAfter2Seconds()
        .then((result) => {
            console.log(result);
         });
}


asyncCallWithThen()