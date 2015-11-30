var ref = new Firebase("https://workzone.firebaseio.com/#-K3wMFcztgL-vf9rB4NA|244c44674ba0ee424b03bbc66fae9a01");
ref.createUser({
	email: "bobtony@Firebase.com",
	password: "correcthorsebatterystaple"
}, function(error, userData) {
	if (error) {
		console.log("Error creating user:", error);
	} else {
		console.log("Successfully create user account with uid:", userData.uid);
	}
});