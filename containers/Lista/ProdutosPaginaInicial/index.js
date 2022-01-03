import React, { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';

//import { connect } from 'react-redux';

const PRODUTOS = [
    {
        id: 19191919,
        fotos: ["/static/img/mouse-1.png"],
        titulo: "Mouse Gamer 1",
        preco: 35,
        promocao: 25
    },
    {
        id: 20202020,
        fotos: ["/static/img/mouse-1.png"],
        titulo: "Mouse Gamer 3",
        preco: 35,
        promocao: 30
    },
    {
        id: 2121212121,
        fotos: ["/static/img/mouse-2.png"],
        titulo: "Mouse Gamer 4",
        preco: 35,
        promocao: 15
    },
    {
        id: 22222222,
        fotos: ["/static/img/mouse-4.png"],
        titulo: "Mouse Gamer 5",
        preco: 35,
        promocao: 10
    },
]

class ProdutosPaginaInicial extends Component {
    render(){
        return (
            <div className="container Produtos-Pagina-Inicial flex vertical">
                <h2>Lançamentos</h2>
                <br />
                <Produtos
                    //produtos={ this.props.produtos ? this.props.produtos.docs : [] }
                    produtos={PRODUTOS}
                    itensPorLinha={4} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    produtos: state.produto.produtos
});

export default connect(mapStateToProps)(ProdutosPaginaInicial);