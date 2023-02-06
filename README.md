# <img src="https://uploads-ssl.webflow.com/5ea5d3315186cf5ec60c3ee4/5edf1c94ce4c859f2b188094_logo.svg" alt="Pip.Services Logo" width="200"> <br/> Tokenizers, parsers and expression calculators in Node.js / ES2017

This module is a part of the [Pip.Services](http://pip.services.org) polyglot microservices toolkit.
It provides syntax and lexical analyzers and expression calculator optimized for repeated calculations.

The module contains the following packages:
- **Calculator** - Expression calculator
- **CSV** - CSV tokenizer
- **IO** - input/output utility classes to support lexical analysis
- **Mustache** - Mustache templating engine
- **Tokenizers** - lexical analyzers to break incoming character streams into tokens
- **Variants** - dynamic objects that can hold any values and operators for them

<a name="links"></a> Quick links:

* [API Reference](https://pip-services3-nodex.github.io/pip-services3-expressions-nodex/globals.html)
* [Change Log](CHANGELOG.md)
* [Get Help](http://docs.pipservices.org/get_help/)
* [Contribute](http://docs.pipservices.org/contribute/)

## Use

Install the NPM package as
```bash
npm install pip-services3-expressions-nodex --save
```

The example below shows how to use expression calculator to dynamically
calculate user-defined expressions.

```typescript
import { IConfigurable } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { IReferenceable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { IOpenable } from 'pip-services3-commons-nodex';

...
let calculator = new ExpressionCalculator();

calculator.expression = "A + b / (3 - Max(-123, 1)*2)";

let vars = new VariableCollection();
vars.add(new Variable("A", new Variant(1)));
vars.add(new Variable("B", new Variant("3")));

let result = await calculator.evaluateWithVariables(vars);
console.log("The result of the expression is " + result.asString);
...
```

This is an example to process mustache templates.

```typescript
let mustache = new MustacheTemplate();
mustache.template = "Hello, {{{NAME}}}{{#ESCLAMATION}}!{{/ESCLAMATION}}{{#unless ESCLAMATION}}.{{/unless}}";
let result = mustache.evaluateWithVariables({ NAME: 'Mike', ESCLAMATION: true });
console.log("The result of template evaluation is '" + result + "'");
```

## Develop

For development you shall install the following prerequisites:
* Node.js 8+
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the code:
```bash
tsc
```

Run automated tests:
```bash
npm test
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

## Contacts

The module is created and maintained by **Sergey Seroukhov**.
