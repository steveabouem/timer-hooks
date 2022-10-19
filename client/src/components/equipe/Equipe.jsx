import CarteInfo from "../common/CarteInfo";
import Page from "../common/page/Page";



const staff = [
    {
        name: 'Jeannette A.', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://www.looper.com/img/gallery/endgame-directors-address-gamoras-fate-after-tonys-snap/intro-1557841777.jpg'
    },
    {
        name: 'Alain T.', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://w0.peakpx.com/wallpaper/55/230/HD-wallpaper-evil-thanos-smile.jpg'
    },
    {
        name: 'Josue Z.', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://cosmicbook.news/wp-content/uploads/2022/07/doctor-doom-concept-art-black-panther-2.jpg'
    },
    {
        name: 'Collette R.', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Emma-Frost-Comic-Diamond-Form.jpg'
    },
];

const Equipe = () => {

    return (
        <Page header="équipe">
            <div className="products-list">
                {staff.map((props) =><CarteInfo {...props} full />) }
            </div>
        </Page>
    )
};

export default Equipe;