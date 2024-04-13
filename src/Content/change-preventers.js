const cp = {
    title: "Change Preventers",
    txt: "Perubahan yang terjadi di satu tempat menimbulkan perubahan yang di banyak tempat. Smell ini menimbulkan kesulitan dalam menambahkan fitur baru sehingga perlu dilakukan refactoring.",
    types : [
        {
            id: 0,
            title: "Divergent Change",
            desc: "Divergent Change terjadi ketika kita harus membuat berbagai perubahan di kelas yang sama untuk alasan yang berbeda. Jadi, kita memiliki satu kelas yang ingin kita ubah atau tambahkan fiturnya, namun akibatnya kita harus mengubah metode - metode lain yang tidak bersangkutan. Dengan mengatasi smell ini, kode menjadi lebih terorganisir, mudah untuk dimodifikasi, dan kode duplikat berkurang.",
            treatment: "Untuk mengatasi divergent change, dapat dilakukan Extract Class, Extract Superclass, dan Extract Subclass.",
            codebefore: `public class SavingsAccount {
        private string accountId;
        private string accountName;
        private int amount;
 
        function withdraw(amount) {
            if (this.balance < 1000) {
                throw new Error("Balance cannot be below $1000!"); 
            }
                // ... withdrawal logic
        }
             
        function transfer(amount, otherAccount) {
            if (this.balance < 1000) {
            throw new Error("Balance cannot be below $1000!");
        }  
            // ... transfer logic
        }
}`,
            codeafter: `public class SavingsAccount {
        private string accountId;
        private string accountName;
        private int amount;

        public void validateMinimumBalance() {
            if (this.balance < 1000) {
                throw new Error("Balance cannot be below $1000!");
            }
        }
 
        public void withdraw(amount) {
            validateMinimumBalance();
            // ... withdrawal logic
        }
             
        public void transfer(amount, otherAccount) {
            validateMinimumAmout();
            // ... transfer logic
        }
}`
        },
        {
            id: 1,
            title: "Shotgun Surgery",
            desc: "Shotgun Surgery mirip dengan Divergent Change namun merupakan kebalikannya. Shotgun Surgery terjadi ketika perubahan harus dilakukan di banyak tempat sekaligus. Saat kita ingin melakukan perubahan di satu kelas namun kita juga harus melakukan perubahan di kelas - kelas lain agar program tetap berjalan. Dengan mengatasi smell ini, kode menjadi lebih mudah untuk di-maintain, lebih terorganisir, dan kode duplikat menjadi lebih sedikit.",
            treatment: "Untuk mengatasi Shotgun Surgery, dapat dilakukan Move Method, Move Field, Extract Interface, dan Inline Class.",
            codebefore: `public class Account {
        private String accountId;
        private double balance;
                
        // Constructor, getters, setters
                
        public void deposit(double amount) {
            balance += amount;
        }
                
        public void withdraw(double amount) {
            balance -= amount;
        }
                
        public void transfer(Account destinationAccount, double amount) {
            balance -= amount;
            destinationAccount.deposit(amount);
        }
}
            
public class TransactionValidator {
        public boolean validateDeposit(double amount) {
            // Validate deposit
            return true;
        }
                
        public boolean validateWithdrawal(Account account, double amount) {
            // Validate withdrawal
            return true;
        }
                
        public boolean validateTransfer(Account sourceAccount, Account destinationAccount, double amount) {
            // Validate transfer
            return true;
        }
}
            
public class TransactionProcessor {
        private TransactionValidator validator;

        public TransactionProcessor(TransactionValidator validator) {
            this.validator = validator;
        }
                
        public void processDeposit(Account account, double amount) {
            if (validator.validateDeposit(amount)) {
                account.deposit(amount);
            }
        }
                
        public void processWithdrawal(Account account, double amount) {
            if (validator.validateWithdrawal(account, amount)) {
                account.withdraw(amount);
            }
        }
                
        public void processTransfer(Account sourceAccount, Account destinationAccount, double amount) {
            if (validator.validateTransfer(sourceAccount, destinationAccount, amount)) {
                sourceAccount.transfer(destinationAccount, amount);
            }
        }
}`,
            codeafter: `public interface TransactionValidationStrategy {
        boolean validate(Account sourceAccount, Account destinationAccount, double amount);
}
            
public class DepositValidationStrategy implements TransactionValidationStrategy {
        @Override
        public boolean validate(Account sourceAccount, Account destinationAccount, double amount) {
            // Validate deposit
            return true;
        }
}
            
public class WithdrawalValidationStrategy implements TransactionValidationStrategy {
        @Override
        public boolean validate(Account sourceAccount, Account destinationAccount, double amount) {
            // Validate withdrawal
            return true;
        }
}
            
public class TransferValidationStrategy implements TransactionValidationStrategy {
        @Override
        public boolean validate(Account sourceAccount, Account destinationAccount, double amount) {
            // Validate transfer
            return true;
        }
}
            
public class TransactionProcessor {
        private TransactionValidationStrategy validationStrategy;
            
        public TransactionProcessor(TransactionValidationStrategy validationStrategy) {
            this.validationStrategy = validationStrategy;
        }
            
        public void processDeposit(Account account, double amount) {
            if (validationStrategy.validate(account, null, amount)) {
                account.deposit(amount);
            }
        }
            
        public void processWithdrawal(Account account, double amount) {
            if (validationStrategy.validate(account, null, amount)) {
                account.withdraw(amount);
            }
        }
            
        public void processTransfer(Account sourceAccount, Account destinationAccount, double amount) {
            if (validationStrategy.validate(sourceAccount, destinationAccount, amount)) {
                sourceAccount.transfer(destinationAccount, amount);
            }
        }
}`
        },
        {
            id: 2,
            title: "Parallel Inheritance Hierarchies",
            desc: "Parallel Inheritance Hierarchies terjadi saat kelas - kelas saling bergantung dan mempunyai hierarki yang paralel. Saat kita membuat subclass baru untuk sebuah kelas, hal ini mengharuskan kita untuk membuat subclass baru untuk kelas yang lain. Dengan mengatasi smell ini, kode menjadi lebih mudah untuk diperluas dan dipahami.",
            treatment: "Untuk mengatasi Parallel Inheritance Hierarchies, dapat melakukan Move Method dan Move Field.",
            codebefore: `package com.example.codesmell.parallelinheritence;
public interface Engineer {
        String getType();
        void setType(String type);
        int getSalary();
        void setSalary(int salary);
        MileStone getMileStone();
        void setMileStone(MileStone mileStone);
}
            
public interface MileStone {
        public String work();
        public String target();
}
            
public class ComputerEngineer implements Engineer {
        private String type;
        private int salary;
        private MileStone mileStone;
                
        public void setType(String type) {
            this.type = type;
        }
            
        public void setSalary(int salary) {
            this.salary = salary;
        }
            
        public void setMileStone(MileStone mileStone) {
            this.mileStone = mileStone;
        }
            
        @Override
        public String getType() {
            return type;
        }
            
        @Override
        public int getSalary() {
            return salary;
        }
            
        @Override
        public MileStone getMileStone() {
            return mileStone;
        }
}
            
public class ComputerMileStone implements MileStone {
        @Override
        public String work() {
            return"Build a Billing MicroService";
        }
            
        @Override
        public String target() {
            return"Has to be finshed in 14 PD";
        }
}            
            
public class CivilEngineer implements Engineer {
        private String type;
        private int salary;
        private MileStone mileStone;
            
        public void setType(String type) {
            this.type = type;
        }
            
        public void setSalary(int salary) {
            this.salary = salary;
        }
            
        public void setMileStone(MileStone mileStone) {
            this.mileStone = mileStone;
        }
            
        @Override
        public String getType() {
            return type;
        }
            
        @Override
        public int getSalary() {
            return salary;
        }
            
        @Override
        public MileStone getMileStone() {
            return mileStone;
        }
}

public class CivilMileStone implements MileStone {
        @Override
        public String work() {
            return "Create  Twin Towers";
        }
            
        @Override
        public String target() {
            return "Has to be completed in 2 years";
        }
    }
}`,
codeafter: `package com.example.codesmell.parallelinheritence;
public interface EngineerMileStone {
        String getType();
        void setType(String type);
        int getSalary();
        void setSalary(int salary);
        public String work();
        public String target();
}

public class RefactorComputerEngineer implements EngineerMileStone {
        private String type;
        private int salary; 

        @Override
        public String getType() {
            return type;
        }

        @Override
        public void setType(String type) {
            this.type=type;
        }

        @Override
        public int getSalary() {
            return salary;
        }

        @Override
        public void setSalary(int salary) {
            this.salary=salary;
        }

        @Override
        public String work() {
         return"Build a Billing MicroService";
        }

        @Override
        public String target() {
            return"Has to be finshed in 14 PD";
        }
}

public class ReFactorCivilEngineer implements EngineerMileStone {
        private String type;
        private int salary; 

        @Override
        public String getType() {
            return type;
        }

        @Override
        public void setType(String type) {
            this.type=type;
        }

        @Override
        public int getSalary() {
            return salary;
        }

        @Override
        public void setSalary(int salary) {
            this.salary=salary;
        }

        @Override
        public String work() {
            return "Create  Twin Towers";
        }

        @Override
        public String target() {
            return "Has to be completed in 2 years";
        }
}`
    }]
}

export default cp;