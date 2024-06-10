import React from 'react';
import styles from './style.module.scss';
import PropTyes from 'prop-types';

function FormGroupSearchRow(props) {
    return (
        <div className={`${styles['group-form-search-row']} ${props?.className}`}
            style={props.style}>
            {props.componentLeft || props?.children ? (
                <div className={`${styles['group-input']}`} style={{
                    flex: 1
                }}>
                    {props.componentLeft ?? props?.children}
                </div>
            ) : (
                <></>
            )}
            {props.componentRight ? (
                <div style={props.styleAction} className={`${styles['group-action']}`}>
                    {props.componentRight}
                    {isShowFilterColumnTable ? (
                        <div
                            onClick={handleTriggerPopup}
                            className={`${styles['icon-action']}`}
                        >
                            <IconSettingFilter color="#138300" />
                        </div>
                    ) : (
                        <></>
                    )}
                    {
                        props.componentOption
                    }
                </div>
            ) : (
                <></>
            )}

        </div>
    );


}
FormGroupSearchRow.PropTyes = {

}
export default FormGroupSearchRow;
