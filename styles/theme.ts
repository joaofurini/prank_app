import { extendTheme } from '@chakra-ui/react'



export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#484848",
        },
        orange: {
            "300": "#F39325",
        },
        blue: {
            "300": "#6EC7F1",
            "900": "#0c78b7",
        }
    },
    styles: {
        global: {
            '::-webkit-scrollbar': {
                width: '10px',
                borderRadius: '0px',
                position: 'relative',

                backgroundColor: `black`,
            },
            '&::-webkit-scrollbar-thumb': {
                position: 'relative',

                background: `radial-gradient(circle, rgba(233,0,0,1) 0%, rgba(0,0,0,1) 100%)`,

            },
            html: {
                width: '100%',
                height: '100%',
                padding: '0px',
                overflowx: 'hidden',


            },
           
            body:{
                background:' radial-gradient(circle at center, #1a1546, #040411 40%)',
                height: '100vh',
                width: '100%',
                perspective: '1000px'
           },
            h1: {
                fontSize: '5rem'

            },
        }
    }
})