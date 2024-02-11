Bun.serve ({
    port: 3001,
    fetch(request) {
        return new Response('Hello World')
    },
})

console.log('Server is running on port 3001')