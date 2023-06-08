package com.unicam.bandb.prenotazione;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Prenotazione {

    @Id
    @SequenceGenerator(name = "prenotazione_sequence", sequenceName = "prenotazione_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "prenotazione_sequence")
    private long id;
    private int camera;
    private String nome;
    private String cognome;

    private String email;

    private String telefono;

    private LocalDate data_inizio;
    private LocalDate data_fine;

    private int ospiti;

    public Prenotazione(long id, int camera, String nome, String cognome, String email, String telefono, LocalDate data_inizio, LocalDate data_fine, int ospiti) {
        this.id = id;
        this.camera = camera;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.telefono = telefono;
        this.data_inizio = data_inizio;
        this.data_fine = data_fine;
        this.ospiti = ospiti;
    }
    public Prenotazione(int camera, String nome, String cognome, String email, String telefono, LocalDate data_inizio, LocalDate data_fine, int ospiti) {
        this.camera = camera;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.telefono = telefono;
        this.data_inizio = data_inizio;
        this.data_fine = data_fine;
        this.ospiti = ospiti;
    }

    public Prenotazione(long id, int camera, LocalDate data_inizio, LocalDate data_fine){
        this.id = id;
        this.camera = camera;
        this.data_inizio = data_inizio;
        this.data_fine = data_fine;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public int getCamera() {
        return camera;
    }
    public void setCamera(short camera) {
        this.camera = camera;
    }
    public int getOspiti() { return ospiti; }
    public void setOspiti(int ospiti) { this.ospiti = ospiti; }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCognome() {
        return cognome;
    }
    public void setCognome(String cognome) {
        this.cognome = cognome;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public LocalDate getData_inizio() {
        return data_inizio;
    }
    public void setData_inizio(LocalDate data_inizio) {
        this.data_inizio = data_inizio;
    }
    public LocalDate getData_fine() {
        return data_fine;
    }
    public void setData_fine(LocalDate data_fine) {
        this.data_fine = data_fine;
    }

    @Override
    public String toString() {
        return "Prenotazione{" +
                "id=" + id +
                ", camera=" + camera +
                ", nome='" + nome + '\'' +
                ", cognome='" + cognome + '\'' +
                ", email='" + email + '\'' +
                ", telefono='" + telefono + '\'' +
                ", data_inizio=" + data_inizio +
                ", data_fine=" + data_fine +
                ", ospiti=" + ospiti +
                '}';
    }
}
