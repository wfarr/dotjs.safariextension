..................... dotjs ........................

dotjs  is a  Google Chrome  extension  that executes
JavaScript files in `~/.js` based on their filename.

If  you navigate to  `http://www.google.com/`, dotjs
will execute `~/.js/google.com.js`.

This makes it super  easy to spruce up your favorite
pages using JavaScript.

Bonus:  files in `~/.js`  have jQuery  1.4.4 loaded,
regardless  of  whether  the  site  you're  hacking
uses jQuery.

GreaseMonkey user scripts are great, but you need to
publish them  somewhere and re-publish  after making
modifications. With dotjs, just add or edit files in
`~/.js`.

## Installation

1. Ensure you have defunkt's dotjs installed and running.
2. [Install the extension](https://github.com/wfarr/dotjs.safariextension/blob/master/dotjs.safariextz?raw=true)

### Manual Installation

1. Clone this repo locally, hack
2. Obtain and install a Safari developer certificate from http://developer.apple.com
3. In Safari, enable the Develop menu: Safari > Preferences… > Advanced > Show Develop menu in menu bar
4. Open the Extension Builder: Develop > Show Extension Builder
5. Add your custom extension by clicking + > Add Extension…
6. Install!

## How It Works

The dotjs Safari extension then makes ajax requests
to http://localhost:3131/convore.com.js any time you
hit a page on convore.com, for example, and executes
the returned JavaScript.

## Requires

- dotjs installed (https://github.com/defunkt/dotjs.git)
- Safari

## Credits

- DotJS code: <https://github.com/defunkt/dotjs>
- Icon: <http://raphaeljs.com/icons/>
- jQuery: <http://jquery.com/>
- Ryan Tomayko for:

> "I almost wish you could just
   stick JavaScript in ~/.js. Do
   you know what I'm saying?"
