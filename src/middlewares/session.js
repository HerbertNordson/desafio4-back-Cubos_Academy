const verify = async (ctx, next) => {
	// const [token] = ctx.headers.authorization.split(' ');
	const { authorization = null } = ctx.headers;
	if (authorization ) {
		const [token] = authorization.split(' ');
		if (token !== "undefined") {
			try {
				const verification = await jwt.verify(token, process.env.JWT_SECRET);
		
				ctx.state.userId = verification.id;
				ctx.state.email = verification.email;
			} catch (err) {
				console.log(err);
				return response(ctx, 403, 'Ação proibida');
			}
		}
		
	}

	return next();
};

module.exports = { verify };