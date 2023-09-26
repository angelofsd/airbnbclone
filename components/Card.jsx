import PropTypes from 'prop-types'

export default function Card(props) {

  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }


  return (
      <div className="card">
          { badgeText && <div className="card--badge">{badgeText}</div>}
          <img src={`../src/assets/images/${props.item.coverImg}`} className="card--image" />
          <div className="card--stats">
              <img src="../src/assets/images/star.png" className="card--star" />
              <span>{props.item.stats.rating}</span>
              <span className="gray">({props.item.stats.reviewCount}) • </span>
              <span className="gray">{props.item.location}</span>
          </div>
          <p>{props.item.title}</p>
          <p><span className="bold">From ${props.item.price}</span> / person</p>
      </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  location: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  openSpots: PropTypes.number,
  item: PropTypes.object

};