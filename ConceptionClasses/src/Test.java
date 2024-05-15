import java.util.Date;

import ConceptionClasses.Membre;

public class Test {
 public static void main(String[] args) {
     
     Membre membre = new Membre("Boukechour", "Issam", 1, new Date(), "Actif");
     membre.afficherDetails();
     
     
     Livre livre = new Livre("L'histoire de l'automobile", "Akram ojeh", "81291163", true);
     livre.afficherDetails();
     
 }
}
