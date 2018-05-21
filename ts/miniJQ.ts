/***********************************************************************************************************************
 * Q1) Ecrivez la classe MiniJQData de sorte à mimer le comportement de JQuery
 * voir http://api.jquery.com/
 * * Au minimum, les méthodes :
 *   - each
 *   - text
 *   - html
 *   - click
 *   - bind
 *   - append
 *   - find
 *   - detach
 */
type FCT_EACH = (index: number, element: Element) => void;
type APPENDABLE = string | Element | MiniJQData;
type FCT_APPEND = (index: number, html: string) => APPENDABLE;
/*
on definit trois types
 */
class MiniJQData {
    /*
    La classe mini data qui a un certians nombre de methodes qu'on va implémenter
     */
    private elements: Element[];
    constructor( elements: Element[] ) {
        this.elements = elements;
    }

    // La methode Each

    each(fct: FCT_EACH): this {
        // type FCT_EACH=(i:number, e:Element)=>void
        for(let i=0; i<this.elements.length;i++){
            fct(i, this.elements[i]);
        }

        /*
        Ou sino, on peut faire comme cela, c'est la même chose que le code d'en haut
            this.elements.forEach(
                (e, i)=>fct.call(i, e) // OU fct.apply(i, e)
             )
         */
        return this;
    }

    toggleClass(className: string, state?: boolean): this {
        return this;
    }

    // text: http://api.jquery.com/text/
    text(): string;                     // Voir doc JQuery
    text(str: string): this;            // Voir doc JQuery
    text(str?: string): string | this { // Façon de faire de la "surcharge" en Typescript
        if (typeof str === "string") {
            return this;
        } else {
            return "";
        }
    }

    // html: http://api.jquery.com/html/
    html(): string;
    html(htmlString: string): this;
    html(htmlString?: string): string | this {
        if (typeof htmlString === "string") {
            return this;
        } else {
            return "";
        }
    }

    // click: https://api.jquery.com/click/
    click(handler?: (evt: MouseEvent) => void): this {
        return this;
    }

    // bind:
    bindEvents(events: Object): this { // voir .bind(events) dans la doc
        return this;
    }
    bind(eventType: string, handler: (evt: Event) => void, preventBubble: boolean): this {
        return this;
    }

    // find: https://api.jquery.com/find/
    find(selector: string | Element | MiniJQData): this {
        if (typeof selector === "string") {
            //
        } else {
            if (selector instanceof MiniJQData) {
                //
            } else { // selector is an Element
                //
            }
        }
        return this;
    }

    // Pour les autres fonctions, voir la doc JQuery et faire l'implem en s'appuyant sur each

    // append: http://api.jquery.com/append/
    appendFct(fct: FCT_APPEND): this {
        return this;
    }
    append(...elements: APPENDABLE[]): this {
        return this;
    }
}

/***********************************************************************************************************************
 * Q2) Ecrivez la fonction miniJQ :
 *   - argument : un sélecteur CSS ou un Element du DOM
 *   - renvoi une instance de la classe MiniJQData
 */



export let miniJQ = (selecteur: string | Element | Element[]): MiniJQData => {
    /*
    Ce l'équivalent du dollar
     */
    let elements: Element[] = [];

    if (typeof selecteur === "string") {
        //console.log( selecteur, "is a string" );
        const L = document.querySelectorAll(selecteur);
        elements=[...L];    // ou elements = Array.from(L);
    }

    if (selecteur instanceof Element) { // si c'est une instance d'Element
        //console.log( selecteur, "is a Element" );
        elements=[selecteur];
    }


    if (selecteur instanceof Array) {   // si c'est un tableau
        //console.log( selecteur, "is an array of Elements" );
        elements=selecteur;
    }


    return new MiniJQData( elements ); // on va renvoyer un objet jQ mini data
};





/***********************************************************************************************************************
 * Q3) Etendez la classe MiniJQData avec d'autres méthodes de votre choix
 *  Par exemple des méthodes issues de JQueryUI
 */
