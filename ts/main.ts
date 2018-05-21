import { miniJQ as $ } from "./miniJQ";
export {miniJQ as $} from "./miniJQ";

// Tests initialisation
$( "p" );
$( document.body );
$( [document.body] );

// Tests text()
$("p").text( "on copie le titre dans le paragraphe:" + $("h1").text() );

// Tests html()
$("p").html( $("p").html() + "<br/><code>Du pseudo code...</code>");

// Tests click()
let nbCLicks = 0;
let prefix = $("code").text();
$("code").click( () => {
    $("code").text(  `${prefix} :: ${++nbCLicks}` );
} ).click();

$( "span.testClick" ).click(function() {
    $( "li" ).each(function() {
        $( this ).toggleClass( "example" );
    });
});

// Test append()
$("h1").append( $("ul.testAppend > li").appendFct( i => ` -> ${i}` ) );

