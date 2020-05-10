import React from 'react';
import {ReactComponent as JSLogo} from '../icons/JSLogo.svg'
import {ReactComponent as TSLogo} from '../icons/TSLogo.svg'

export const possiblePrimaryLanguage = {
    JavaScript: (<JSLogo style={{width: '60px', height: '60px', marginLeft: '15px'}}/>),
    TypeScript: (<TSLogo style={{width: '60px', height: '60px', marginLeft: '15px'}}/>)
}