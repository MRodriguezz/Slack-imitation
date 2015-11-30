var ref = new Firebase("https://workzone.firebaseio.com/#-K3wMFcztgL-vf9rB4NA|244c44674ba0ee424b03bbc66fae9a01");
ref.authWithPassword({
	email: "bobtony@Firebase.com",
	password: "correcthorsebatterystaple"
}, function(error, authData) {
	if (error) {
		console.log("Login Failed!", error);
	} else {
		console.log("Authenticated successfully with payload:", authData);
	}
});