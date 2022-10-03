class Contact {
	//Private instance members (fields)
	private fullName: string;
	private contactNumber: string;
	private emailAddress: string;

	//public properties
	get FullName(): string {
		return this.fullName;
	}

	set FullName(name: string) {
		this.fullName = name;
	}

	get ContactNumber(): string {
		return this.contactNumber;
	}

	set ContactNumber(name: string) {
		this.contactNumber = name;
	}

	get EmailAddress(): string {
		return this.emailAddress;
	}

	set EmailAddress(name: string) {
		this.emailAddress = name;
	}

	// Constructor

	/**
	 * Creates an instance of Contact.
	 * @param {string} [fullName="unknown name"]
	 * @param {string} [contactNumber="no contact number"]
	 * @param {string} [emailAddress="unknown email address"]
	 * @memberof Contact
	 */
	constructor(
		fullName: string = "unknown name",
		contactNumber: string = "no contact number",
		emailAddress: string = "unknown email address"
	) {
		this.FullName = fullName;
		this.ContactNumber = contactNumber;
		this.EmailAddress = emailAddress;
	}
	//Public methods

	/**
	 * This method overrides the built-in toString method for the Contact class
	 *
	 * @return {*}  {string}
	 * @memberof Contact
	 */

	public toString(): string {
		let outputString = "";
		outputString += `Full Name: ${this.FullName}\n`;
		outputString += `Contact Number: ${this.ContactNumber}\n`;
		outputString += `Email Address: ${this.EmailAddress}\n`;
		return outputString;
	}

	/**
	 * This method converts class Data Members to a comma-separated list compatible with JSON
	 *
	 * @return {*}  {string}
	 * @memberof Contact
	 */

	public toJSON(): string {
		return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}}`;
	}

	/**
	 * This method reads data from a comma-separated list and assigns it to class Data members
	 *
	 * @param {string} data
	 * @memberof Contact
	 */

	public fromJSON(data: any): void {
		this.FullName = data.FullName;
		this.ContactNumber = data.ContactNumber;
		this.EmailAddress = data.EmailAddress;
	}
	//Private methods
}
