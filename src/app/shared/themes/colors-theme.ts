

export interface Color{
    lightColor : string
    darkColor : string
    opacityColor : string
    iconColor : string
    fontColor : string
}

export interface Colors{
    [key: string]: Color
}


export let PaletteColors : Colors = {

    "defaultColor" : {
        darkColor : '#000',
        lightColor : '#6c6c6c27',
        opacityColor : '#6c6c6c27',
        iconColor : '#fff',
        fontColor : '#fff'
    },

    "redColor" : {
        darkColor : '#5a0028',
        lightColor :'#5a0028',
        opacityColor :'#f8e8ef',
        fontColor : '#fff',
        iconColor : '#fff'
    },

    "blackColor" : {
        darkColor : '#0c0c0c',
        lightColor : '#3c3c3c',
        opacityColor : '#6c6c6c27',
        fontColor : '#fff',
        iconColor : '#fff'
    },

    "brownColor" : {
        darkColor : '#7e6c42',
        lightColor : '#857552',
        opacityColor : '#efe6d3',
        fontColor : '#fff',
        iconColor : '#fff'
    },

    "blueColor" : {
        darkColor : '#090d3f',
        lightColor : '#202863',
        opacityColor : '#dbe8ff',
        fontColor : '#fff',
        iconColor : '#fff'
    },

};
