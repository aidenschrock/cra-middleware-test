export default function middleware() {
    // Store the response so we can modify its headers

    // Set custom header
    // Response.headers.append(
    //     'X-Content-Type-Options', 'nosniff'
    // );

    return new Response(null, {
        headers: {
            'x-middleware-next': '1',
        },
    })

    // Return response
    // return Response;
}