import ColorRectangles from './ColorRectangle'

// eslint-disable-next-line react/prop-types
const Chatbox = ({colors}) => {
	return (
		<div id="chatbox">
			<div className="loader" style={{ display: 'none' }}></div>
			<ColorRectangles colors={colors} />
		</div>
	)
}

export default Chatbox