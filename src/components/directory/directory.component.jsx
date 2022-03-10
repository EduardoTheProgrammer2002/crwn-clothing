import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'sneakers'
                },
                {
                    title: '',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                    linkUrl: ''
                },
                {
                    title: 'MEN',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large',
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionProps}) => {
                        return(
                            <MenuItem key={id} {...sectionProps}/>
                        )
                    })
                }
            </div>   
        );
    }
}

export default Directory;