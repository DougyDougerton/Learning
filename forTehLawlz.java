//import java.util.Scanner;
import java.util.*;
public class forTehLawlz  {
    public static void main(String[] args) {

           double input = 0.0;
           double inputTwo = 0.0;
           char operator;
           double answer = 0.0;

        Scanner scanObject = new Scanner(System.in);
        
        //System.out.println("Please input a number.");
        input = scanObject.nextDouble();
        //System.out.println("Please select an operator");
        operator = scanObject.next() .charAt(0);
        //System.out.println("Please select a number.");
        inputTwo = scanObject.nextDouble();

         switch(operator) {
            case '+': answer = input + inputTwo;
            break;
            case '-': answer = input - inputTwo;
            break;
            case '*': answer = input * inputTwo;
            break;
            case '/': answer = input / inputTwo;
            break;
            default: System.out.println("Error");
            scanObject.close();
            return;
            
         }
         System.out.println(input + " " + operator + " " + inputTwo + " = " + answer);
        scanObject.close();
        }
    }
    


