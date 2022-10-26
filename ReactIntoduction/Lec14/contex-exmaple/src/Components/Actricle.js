import React from 'react';
import { LangContext } from '../context';

class Article extends React.Component {

    componentDidMount() {
        console.log(this.context)
    }


    render() {


        return (
            // <LangContext.Consumer>
            //     {(value) => (

            <div>
                {this.context.preferedLang === "En" ?
                    <div className="eng-lan">
                        <p>
                            Hello, this Article in English is for Practice does not have any other reason
                        </p>
                    </div>

                    :
                    <div className="ar-lan">
                        <p>
                            مرحبا هذه المقالة باللغة العربية هي فقط لهدف تجريبي

                        </p>
                    </div>

                }

                <div>
                    <button
                        value={this.context.preferedLang === "Ar" ? "En" : "Ar"}
                        onClick={this.context.changeLang}
                    >
                        {this.context.preferedLang === 'Ar' ? "English" : "Arabic"}
                    </button>
                </div>

            </div>
            // )}

            // </LangContext.Consumer>

        )
    }
}

Article.contextType = LangContext;

export default Article;