import React, { useContext } from 'react';
import { GlobalContext } from './Context';

function Paragraph() {

    const lang = useContext(GlobalContext)
    return (
        <div>
            {lang === 'English' ?
                <div>
                    <p>How are you, it's look nice today to have a journy</p>
                </div>

                :
                <div>
                    <p>كيف الحال, يبدو أنه يوم جميل للقيام برحلة</p>
                </div>
            }



        </div>
    )
}
export default Paragraph;