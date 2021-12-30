
class PhoneBook {
    constructor(){
        this.table_Size = 5
        this.directory = new Array(this.table_Size)
    }
    
    hash(phoneNumber){
        return phoneNumber.toString().split('').reduce((acc,val)=>{
            return acc + (+val)
        },0)%this.table_Size
    }

    hash2(phoneNumber){
        return (+phoneNumber * 71) % this.table_Size
    }

    GetPhoneList(){
        let allPhoneDetails = this.directory.flat(3)
        return allPhoneDetails.map(val=> val.phoneNumber)
    }

    AddPhoneNumber(phoneDetails){
        let index = this.hash(phoneDetails.phoneNumber)
        
            if(!this.directory[index]){
                this.directory[index] = [[phoneDetails]]
                return phoneDetails
            }
            if(this.directory[index]){
                let inner_index = this.hash2(phoneDetails.phoneNumber)
                    if(!this.directory[index][inner_index]){
                        this.directory[index][inner_index]= [phoneDetails]
                        return phoneDetails
                    }
                    if(this.directory[index][inner_index]){
                        console.log(phoneDetails.phoneNumber)
                        if(this.directory[index][inner_index].find(val=>val.phoneNumber === phoneDetails.phoneNumber)) {
                            return "Phone Number Already Exist"
                        }
                        this.directory[index][inner_index].push([phoneDetails])
                        return phoneDetails
                    }
            }
    }
    GetPhoneNumber(phoneNumber){
        let index = this.hash(phoneNumber)
            if(this.directory[index]){
                if(this.directory[index].length === 0){
                    return "Phone Number Does Not Exist"
                }
                
                if(this.directory[index].length === 1){
                    return this.directory[index][0][0]
                }
                
                if(this.directory[index].length > 1){
                    
                    let inner_index = this.hash2(phoneNumber) 
                        if(this.directory[index][inner_index].length === 0){
                            return "Phone Number Does Not Exist"
                        }
                        if(this.directory[index][inner_index].length === 1){
                            return this.directory[index][inner_index][0]
                        }
                        if(this.directory[index][inner_index].length > 1){
                            let isAvailable = this.directory[index][inner_index].find(val=>val.phoneNumber === phoneNumber)
                            if(!isAvailable){
                                return "Phone Number Does Not Exist"
                            }
                            return isAvailable
                        }
                }
            }
            if(!this.directory[index]){
                return "Phone Number Does Not Exist"
            }
    }
}
