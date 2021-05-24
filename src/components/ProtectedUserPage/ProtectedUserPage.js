import { useState } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../../redux/selectors';
import { setUser } from '../../redux/actions';
import Todo from '../Todo/Todo';
import classes from './ProtectedUserPage.module.scss';

function ProtectedUserPage({ user, setUser: setUserData }) {
	const [name, setName] = useState(user.name);
	const [surname, setSurname] = useState(user.surname);

	const onChangeInputName = (e) => {
		setName(e.target.value);
	};

	const onChangeInputSurname = (e) => {
		setSurname(e.target.value);
	};

	return (
		<div className={classes.protected}>
			<div className={classes.data}>
				<div className={classes.input}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={onChangeInputName} />
				</div>
				<div className={classes.input}>
					<label htmlFor="surname">Surname:</label>
					<input type="text" id="surname" onChange={onChangeInputSurname} />
				</div>
				<div className={classes.user}>
					<span>Name: </span>
					<span>{user.name}</span>
				</div>
				<div className={classes.user}>
					<span>Surname: </span>
					<span>{user.surname}</span>
				</div>
				<button
					className={classes.btn}
					onClick={() => setUserData({ name, surname })}
				>
					Set User Data
				</button>
			</div>
			<Todo />
		</div>
	);
}

const mapStateToProps = (state) => ({
	user: getUser(state),
});

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedUserPage);
