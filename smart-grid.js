const smartgrid = require('smart-grid');
const settings = {
	outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 16, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: true,
    container: {
        maxWidth: '1600px', /* max-width оn very large screen */
        fields: '20px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '768px',
            fields: '10px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        },
        dima: {
            width: '300px'
        }
    }
};

smartgrid('./src/precss/libs/', settings);