public class Livre  {
	private String titre;
	private String auteur;
	private String isbn;
	private boolean disponible;
	
	public Livre(String titre, String auteur, String isbn, boolean disponible) {
		this.titre = titre;
		this.auteur = auteur;
		this.isbn = isbn;
		this.disponible = disponible;
	}
	
	public String getTitre() {
	     return titre;
	}
	
	public String getAuteur() {
		return auteur;
	}
	
	public String getIsbn() {
		return isbn;
	}
	
	public boolean isDisponible() {
		return disponible;
	}
	
	 public void setTitre(String titre) {
	     this.titre = titre;
	 }
	 public void setauteur(String auteur){
		 this.auteur = auteur;
	 }
	 public void setIsbn(String isbn) {
		 this.isbn = isbn;
	 }
	 public void setDisponible(boolean disponible) {
	     this.disponible = disponible;
	 }


	public void afficherDetails() {
		System.out.println("Titre: " + getTitre());
		System.out.println("Auteur: " + getAuteur());
		System.out.println("Isbn: " + getIsbn());
		System.out.println("Disponible: " + isDisponible());
		}
	
	public void emprunter() {
		if(disponible) {
			disponible = false;
			System.out.println("livre non dispo.");
		} else {
	         System.out.println("Le livre est dispo.");
		}
    }
	public void retourner() {
	     disponible = true;
	     System.out.println("Le livre a été retourné.");
	 }
	}
	

	    