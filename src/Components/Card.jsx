function Card({usuario}) {
  return (
    <div className="card">
      <h2>Bienvenido {usuario.nombre}</h2>
      <h2>Tu libro favorito es {usuario.libroFav}</h2>
    </div>
  )
}

export default Card;