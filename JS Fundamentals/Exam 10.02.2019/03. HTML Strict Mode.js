function solve(input) {
    let validTag = /<("[^"]*"|'[^']*'|[^'">])*>/;

    let result = [];

    input.forEach( value => {
       if(validTag.test(value)) {
           result.push(value.replace(/<[^>]*>/g,''));
       }
    });

   console.log(result.join(' '));
}

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']

);