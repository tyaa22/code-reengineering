const dispen = {
    title: "Dispensables",
    txt: "Hal - hal tidak penting yang dapat menurunkan kualitas kode yang dihasilkan. Refactoring dilakukan untuk membuat kode menjadi lebih rapi, efisien, dan mudah untuk dimengerti.",
    route: "/dispensables",
    types: [
        {
            id: 0,
            title: "Comments",
            desc: "Comments digunakan untuk menjelaskan maksud dan fungsi dari sebuah kode. Comments dapat membuat kode terlihat 'bulky' dan sulit untuk dibaca. Lebih baik menamai kelas, method, dan variable dengan jelas untuk menghindari kebingungan dan comments.",
            treatment: "Untuk menghilangkan comments, dapat dilakukan Extract Variable, Extract Method, Rename Method, dan Introduce Assertion.",
            codebefore: `import java.util.Scanner;
            
public class MenuPrinter {
        //print kemudian scan dan return hasil scan
        public int printMenu(){
            //print header
            System.out.println("====");
            System.out.println("Menu");
            System.out.println("====");
                    
            //print menu
            System.out.println("1. Foo");
            System.out.println("2. Bar");
            System.out.println("3. Baz");
            System.out.println("4. Exit");
                    
            //scan input
            int input = 0;
            Scanner sc = new Scanner(System.in);
            do{
                 System.out.println("Input [1-4]: ");
                sc.nextInt();
                sc.nextLine();
            }while(input < 1 || input > 4);
            sc.close();
            return input;
        }
}`,
            codeafter: `import java.util.Scanner;
            
public class MenuPrinter {          
        public int printMenuAndGetInput(){
            printHeader();
            printMenu();
            return getInput();
        }
            
        private void printHeader() {
            System.out.println("====");
            System.out.println("Menu");
            System.out.println("====");
        }
            
        private void printMenu() {
            System.out.println("1. Foo");
            System.out.println("2. Bar");
            System.out.println("3. Baz");
            System.out.println("4. Exit");
        }
            
        private int getInput() {
            int input = 0;
            Scanner sc = new Scanner(System.in);
            do{
                System.out.println("Input [1-4]: ");
                sc.nextInt();
                sc.nextLine();
            }while(input < 1 || input > 4);
            sc.close();
            return input;
        }
}`
        },
        {
            id: 1,
            title: "Duplicate Code",
            desc: "Duplicate Code merupakan kondisi dimana beberapa potongan dari kode terlihat sama atau melakukan fungsi yang sama. Hal ini dapat terjadi karena kurangnya code abstraction, copy-paste programming, dan kurangnya komunikasi antara developers. Duplicate seharusnya dihindari karena menyalahi prinsip DRY.",
            treatment: "Untuk menghilangkan Duplicate Code, dapat dilakukan Extract Method, Extract Superclass, Extract Class, Consolidate Conditional Expressions, Form Template Method, dan Substitute Algorithm.",
            codebefore: `public class Foo {
        public void bar(){
            //clear screen
            for(int i = 0; i < 26; i++){
                System.out.println("");
            }
                    
            //print = 3x
            for(int i = 0; i < 3; i++){
                System.out.print("=");
            }
            System.out.println("");
            System.out.println("Bar");
            
            //print = 3x
            for(int i = 0; i < 3; i++){
                System.out.print("=");
            }   
            System.out.println("");
        }
                
        public void baz(){
            //clear screen
            for(int i = 0; i < 26; i++){
                System.out.println("");
            }
                    
            //print = 3x
            for(int i = 0; i < 3; i++){
                System.out.print("=");
            }
            System.out.println("");
            System.out.println("Baz");
            
            //print = 3x
            for(int i = 0; i < 3; i++){
                System.out.print("=");
            }
            System.out.println("");
        }
                
        public void qux(){
            //clear screen
            for(int i = 0; i < 26; i++){
                System.out.println("");
            }
                    
            //print = 3x
            for(int i = 0; i < 3; i++){
                System.out.print("=");
            }
            System.out.println("");
            System.out.println("Qux");
            
            //print = 3x
            for(int i = 0; i < 3; i++){
                System.out.print("=");
            }
            System.out.println("");
        }
}`,
            codeafter: `public class Foo {
        public void bar(){
            clearScreen();
            printWithBorder("Bar");
        }
                
        public void baz(){
            clearScreen();
            printWithBorder("Baz");
        }
                
        public void qux(){
            clearScreen();
            printWithBorder("Qux");
        }
            
        private void printWithBorder(String text) {
            printNTimes("=", 3);
            System.out.println("");
            System.out.println(text);
            printNTimes("=", 3);
            System.out.println("");
        }
            
        private void clearScreen() {
            for(int i = 0; i < 26; i++){
                System.out.println("");
            }
        }
                
        private void printNTimes(String s, int n) {
            for(int i = 0; i < n; i++){
                System.out.print(s);
            }
        }
}`
        },
        {
            id: 2,
            title: "Lazy Class",
            desc: "Lazy Class merupakan kelas tanpa value atau tujuan yang jelas sehingga kelas tersebut lebih baik dihilangkan. Dengan menghilangkan Lazy Class, kode menjadi lebih jelas dan mudah untuk di-maintain.",
            treatment: "Untuk menghilangkan Lazy Class, dapat dilakukan Collapse Hierarchy dan Inline Class.",
            codebefore: `public class PriceValidator {
        public static boolean validate(int value){
            return value >= 0;
        }
}

public class Price {
	    private int value;

	    public Price(int value) throws Exception {
		    if(!PriceValidator.validate(value)) {
			    throw new Exception("price not valid");
		    }
		    this.value = value;
	    }

	    public int getValue() {
		    return value;
	    }
}`,
            codeafter: `package fowler.dispensables.lazy_class.after;
public class Price {
        private int value;
                
        public Price(int value) throws Exception {
            if(!isPriceValid(value)) {
                throw new Exception("price not valid");
            }
                    
            this.value = value;
        }
            
        private boolean isPriceValid(int value){
            return value >= 0;
        }
                
        public int getValue() {
            return value;
        }
}`
        },
        {
            id: 3,
            title: "Data Class",
            desc: "Data Class merupakan kelas yang hanya memiliki fields dan getters-setters. Kelas ini hanya berupa penampung untuk data yang digunakan oleh kelas lain dan tidak dapat mengolah sendiri data yang mereka tampung. Biasanya data class tercipta karena kurangnya enkapsulasi.",
            treatment: "Untuk menghilangkan Data Class, dapat dilakukan Encapsulation, Move Method, Extract method, Remove Setting Method, dan Hide Method.",
            codebefore: `public class FullName {
        private String firstName;
        private String lastName;
                
        public FullName(String firstName, String lastName) {
            super();
            this.firstName = firstName;
            this.lastName = lastName;
        }
                
        public String getFirstName() {
            return firstName;
        }
        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }
        public String getLastName() {
            return lastName;
        }
        public void setLastName(String lastName) {
            this.lastName = lastName;
        }
}
public class User {
	    private FullName fullName;
	
	    private String address;
	    private String phone;
	
	    //...
	    //another User behaviors...
	    //...
	
	    public void login() {
		    //...
	    }
	
	    public void logout() {
		    //...
	    }
}`,
            codeafter: `public class User {
        private String firstName;
        private String lastName;
                
        private String address;
        private String phone;
                
        //...
        //another User behaviors...
        //...
                
        public void login() {
            //...
        }
                
        public void logout() {
            //...
        }
}`
        },
        {
            id: 4,
            title: "Dead Code",
            desc: "Dead Code dapat berupa variable, parameter, field, method, atau class yang tidak digunakan lagi. Hal ini biasa disebabkan perubahan requirements atau refactoring. Dead code sebaiknya dihilangkan untuk mengurangi ukuran kode dan membuat kode lebih mudah dipahami.",
            treatment: "Untuk menghilangkan Dead Code, dapat dilakukan penghapusan kode dan file yang sudah tidak digunakan, Inline Class, Collapse Hierarchy, dan Remove Parameter.",
            codebefore: `public class PriceCalculator {
        public double calculate(double price, boolean isDiscount){
        double discountPrice = 0;
                    
        //jika harga kurang dari 10000, diskon 10%
        //selain itu, diskon 20%
        if(isDiscount){
            if(price < 10000){
                discountPrice = price * 0.1;
            } else {
                discountPrice = price * 0.2;
            }
        }
                    
        //requirement berubah
        //diskon diketok rata 15%
        if(isDiscount)
            discountPrice = price * 0.15;
        return price - discountPrice;
        }   
}`,
            codeafter: `public class PriceCalculator {
        public double calculate(double price, boolean isDiscount){
            double discountPrice = 0;
                
            if(isDiscount) discountPrice = price * 0.15;
                    
            return price - discountPrice;
        }
}`
        },
        {
            id: 5,
            title: "Speculative Generality",
            desc: "Speculative Generality mirip dengan Dead Code. Perbedaannya adalah jika Dead Code merupakan kode lama yang tidak digunakan lagi, Speculative Generality merupakan kode yang diciptakan untuk fitur yang akan datang namun pada akhirnya tidak pernah diimplementasikan.",
            treatment: "Untuk menghilangkan Speculative Generailty, dapat dilakukan penghapusan kode yang tidak digunakan, Collapse Hierarchy, Inline Class, Inline Method, dan Remove Parameter.",
            codebefore: `public abstract class Currency {
        public abstract String getCode();
}

public abstract class Digital extends Currency {

}

public abstract class Traditional extends Currency {

}

public class IDR extends Traditional {
	    @Override
	    public String getCode() {
		    return "IDR";
	    }
}

public class USD extends Traditional {
	    @Override
	    public String getCode() {
		    return "USD";
	    }
}

public class Price {
        int value;
        Currency currency;
                
        public Price(int value, Currency currency) {
            this.value = value;
            this.currency = currency;
        }
                
        public int getValue() {
            return value;
        }
        public void setValue(int value) {
            this.value = value;
        }
        public Currency getCurrency() {
            return currency;
        }
        public void setCurrency(Currency currency) {
            this.currency = currency;
        }
}`,
            codeafter: `public abstract class Currency {
        public abstract String getCode();
}

public class IDR extends Currency {
	
	    @Override
	    public String getCode() {
		    return "IDR";
	    }
}

public class USD extends Currency {

	    @Override
	    public String getCode() {
		    return "USD";
	    }
}

public class Price {
	    int value;
	    Currency currency;
	
	    public Price(int value, Currency currency) {
		    this.value = value;
		    this.currency = currency;
	    }
	
	    public int getValue() {
		    return value;
	    }
	    public void setValue(int value) {
		    this.value = value;
	    }
	    public Currency getCurrency() {
		    return currency;
	    }
	    public void setCurrency(Currency currency) {
		    this.currency = currency;
	    }
}`
        }
    ]
}

export default dispen;