/**
 * A redirect is used to transfer data from the display
 * object to the shader program.
 *
 * @memberof PIXI.brend
 * @class
 */
export class Redirect
{
    public source: string | Function;
    public glslIdentifer: string;

    constructor(source: string | Function, glslIdentifer: string)
    {
        /**
         * Source property on a `PIXI.DisplayObject` that
         * holds the data being transferred. This can also
         * be a callback that returns the data.
         *
         * @member {string | Function}
         */
        this.source = source;

        /**
         * GLSL variable that will hold the data.
         *
         * @member {string}
         */
        this.glslIdentifer = glslIdentifer;
    }
}

export default Redirect;
