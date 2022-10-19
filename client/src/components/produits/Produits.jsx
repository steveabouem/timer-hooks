import Page from "../common/page/Page";
import CarteInfo from "../common/CarteInfo";
import('./produits.css');

const products = [
    {
        name: 'raisins', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1615485925763-86786288908a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        name: 'cafe', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        name: 'tomates', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1587411768515-eeac0647deed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        name: 'cannelle', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1587131782738-de30ea91a542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        name: 'fraises', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1615484477676-c6f3c18e8462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        name: 'betterave', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1587486912758-4367d2015d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        name: 'haricots verts', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus tortor. Quisque maximus mi eget lectus ultrices, at tincidunt dolor sodales. Duis molestie mauris vel justo egestas ornare. Sed pulvinar eros neque, ac malesuada purus ullamcorper quis. Cras eu interdum nisi. Ut tempus felis vel erat euismod, id tempus nibh dignissim. Aliquam consectetur vel dui ornare condimentum.', 
        img: 'https://images.unsplash.com/photo-1587334207407-deb137a955ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    
];

const Produits = () => {

    return (
        <Page header="produits">
            <div className="products-list">
                {products.map((props) =><CarteInfo {...props} />) }
            </div>
        </Page>
    )
};

export default Produits;