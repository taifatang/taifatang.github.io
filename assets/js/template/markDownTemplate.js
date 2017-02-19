function Template () {

}

Template.prototype.modal4 = function () {
  return `
### Sign in 

Similar to .Net OWIN Middleware implementation 
\`\`\`sh
let miniAuth = MiniAuth.shared

let authOptions = AuthorizeOptions("apiKey_xyz", "apiSecret_xyz")

let recipe = FacebookSigninRecipe(authOptions)

miniAuth.signinSteps = SigninBuilder(recipe)
miniAuth.authorize()
\`\`\`

### Renew Access Token 
\`\`\`sh
miniAuth.renewSession()
miniAuth.getAccessToken()
\`\`\`

### Retrive User Details 

\`\`\`sh
let miniAuth = MiniAuth.shared
let userFirstName = miniAuth.identity.firstName
let userLastName = miniAuth.identity.lastName
let userEmail = miniAuth.identity.userEmail
\`\`\`
`;
}

Template.prototype.modal3 = function () {
  return `
###If
\`If\` and \`ElseIf\` both takes a predicate e.g. \`1+1, true || true\`

The follow command are available \`If\`, \`Do\`, \`ElseIf\`, \`Else\`
\`\`\`sh
Ok
  .If().Do(() => {} )
  .ElseIf().Do(() => {})
  .Else( () => {})
\`\`\`
Example:
\`\`\`sh
Ok
  .If(1 == 2).Do( () => { Console.WriteLine("HelloWorld!") } )
  .ElseIf(3 == 3).Do( () => { Console.WriteLine("FooBar!") } )
  .Else( () => { Console.WriteLine("I am not called :[ ") } )
\`\`\`
###Switch
\`Switch()\` will take any object. \`Case()\` can be same or any other type

The follow command are available \`Switch\`, \`Case\`, \`Do\`
\`\`\`sh
Ok
  .Switch()
  .Case().Do( () => {})
  .Case().Do( () => {})
\`\`\`
Example: 
\`\`\`sh
Ok
  .Switch(RandomEnum.Food)
  .Case(RandomEnum.Drink).Do( () => { Console.WriteLine("I am no executed :[ ") } )
  .Case(RandomEnum.Food).Do( () => { Console.WriteLine("I am executed!") } )
\`\`\`
###While
In Progress ETA - End of Jan
###Foreach
Up Next ETA - Begining of Feb
###For
Up Next ETA - Mid of Feb
###More & Improvment
Up Next`;
}

