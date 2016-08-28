import {Control,ControlGroup} from '@angular/common'
export class UsernameValidators {
    static shouldBeUnique(control:Control){
        return new Promise((resolve,reject) => {

        setTimeout(function(){
            if(control.value=='haroon')
                resolve({shouldBeUnique:true});
           resolve(null);     
        },
        1000)
        });
    }
    static cannotContainSpace(control:Control){
        if(control.value.indexOf(' ')>= 0)
         return {cannotContainSpace:true};

         return null;

    }
 static shouldSameAsNewPassword(group: ControlGroup){
        var newPassword = group.find('newpassword').value;
        var confirmPassword = group.find('confirmpassword').value;
        
        // If either of these fields is empty, the validation 
        // will be bypassed. We expect the required validator to be 
        // applied first. 
        if (newPassword == '' || confirmPassword == '')
            return null;
        
        if (newPassword != confirmPassword)
            return { shouldSameAsNewPassword: true };
            
        return null;
    }


     static shouldFollowPWDPolicy(control:Control){
        if(control.value.length<5)
         return {shouldFollowPWDPolicy:{requiredLength:5,actualLength:control.value.length}};

         return null;

    }

     static shouldBeCorrect(control:Control){
     return new Promise((resolve,reject) => {

        setTimeout(function(){
            if(control.value!='haroon')
                resolve({shouldBeCorrect:true});
           resolve(null);     
        },
        1000)
        });
    }
    
}