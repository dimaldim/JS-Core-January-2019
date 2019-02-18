function validateRequest(input) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let uriPattern = /^(\*|[A-Za-z\d\.]+)$/g;
    let messagePattern = /^[^<>\\&'"]*$/g;

    if (!validMethods.includes(input.method) || !input.hasOwnProperty('method')) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!uriPattern.test(input.uri) || !input.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!versions.includes(input.version) || !input.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!messagePattern.test(input.message) || !input.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return input;
}