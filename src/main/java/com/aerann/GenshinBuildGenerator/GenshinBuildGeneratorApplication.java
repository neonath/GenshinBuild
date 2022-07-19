package com.aerann.GenshinBuildGenerator;

import com.aerann.GenshinBuildGenerator.metier.ArtifactInvKam;
import com.aerann.GenshinBuildGenerator.repositories.ArtefactRepository;
import com.aerann.GenshinBuildGenerator.services.TestService;
import com.aerann.GenshinBuildGenerator.services.interfaces.IArtifactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GenshinBuildGeneratorApplication implements CommandLineRunner{
    
    @Autowired
    private ArtefactRepository repository;
    
    @Autowired
    private TestService testService;
    
    @Autowired
    private IArtifactService artifactService;

    public static void main(String[] args) {
            SpringApplication.run(GenshinBuildGeneratorApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

      //repository.deleteAll();

//      // save a couple of customers
//      repository.save(new Artifact("Alice", "Smith"));
//      repository.save(new Artifact("Bob", "Smith"));
//
//      // fetch all customers
//      System.out.println("Artifact found with findAll():");
//      System.out.println("-------------------------------");
//      for (Artifact artifact : repository.findAll()) {
//        System.out.println(artifact);
//      }
//      System.out.println();
//
//      // fetch an individual customer
//      System.out.println("Arifacts found with findBySetNameAndSlotKey('Alice','Smith'):");
//      System.out.println("--------------------------------");
//      for (Artifact artifact : repository.findBySetKeyAndSlotKey("Alice","Smith")) {
//        System.out.println(artifact);
//      }
      
//      testService.testJsonReader();
        if(repository.count() == 0){
            artifactService.getArtifactFromJson();
        }

    }

}
