<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170608173819 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_E28446877153098 ON entity');
        $this->addSql('ALTER TABLE entity ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_entity_code ON entity (codePrefix, codeNumber)');
        $this->addSql('DROP INDEX UNIQ_C744045577153098 ON client');
        $this->addSql('ALTER TABLE client ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_client_code ON client (codePrefix, codeNumber)');
        $this->addSql('DROP INDEX UNIQ_9B2A6C7E77153098 ON supplier');
        $this->addSql('ALTER TABLE supplier ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_supplier_code ON supplier (codePrefix, codeNumber)');
        $this->addSql('DROP INDEX UNIQ_F42889FF77153098 ON travelBooking');
        $this->addSql('ALTER TABLE travelBooking ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_travelBooking_code ON travelBooking (codePrefix, codeNumber)');
        $this->addSql('DROP INDEX UNIQ_E84536F777153098 ON serviceBooking');
        $this->addSql('ALTER TABLE serviceBooking ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_serviceBooking_code ON serviceBooking (codePrefix, codeNumber)');
        $this->addSql('DROP INDEX unq_clientDocument_code ON clientDocument');
        $this->addSql('ALTER TABLE clientDocument ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_clientDocument_code ON clientDocument (fk_clientDocumentType, codePrefix, codeNumber)');
        $this->addSql('DROP INDEX unq_supplierDocument_code ON supplierDocument');
        $this->addSql('ALTER TABLE supplierDocument ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_supplierDocument_code ON supplierDocument (fk_supplierDocumentType, codePrefix, codeNumber)');
        $this->addSql('DROP INDEX unq_entityDocument_code ON entityDocument');
        $this->addSql('ALTER TABLE entityDocument ADD codePrefix VARCHAR(8) DEFAULT NULL COMMENT \'Code prefix\', ADD codeNumber BIGINT UNSIGNED DEFAULT 0 NOT NULL COMMENT \'Code number\', DROP code');
        $this->addSql('CREATE UNIQUE INDEX unq_entityDocument_code ON entityDocument (fk_entityDocumentType, codePrefix, codeNumber)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX unq_client_code ON client');
        $this->addSql('ALTER TABLE client ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C744045577153098 ON client (code)');
        $this->addSql('DROP INDEX unq_clientDocument_code ON clientDocument');
        $this->addSql('ALTER TABLE clientDocument ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Number/Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX unq_clientDocument_code ON clientDocument (fk_clientDocumentType, code)');
        $this->addSql('DROP INDEX unq_entity_code ON entity');
        $this->addSql('ALTER TABLE entity ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E28446877153098 ON entity (code)');
        $this->addSql('DROP INDEX unq_entityDocument_code ON entityDocument');
        $this->addSql('ALTER TABLE entityDocument ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Number/Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX unq_entityDocument_code ON entityDocument (fk_entityDocumentType, code)');
        $this->addSql('DROP INDEX unq_serviceBooking_code ON serviceBooking');
        $this->addSql('ALTER TABLE serviceBooking ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E84536F777153098 ON serviceBooking (code)');
        $this->addSql('DROP INDEX unq_supplier_code ON supplier');
        $this->addSql('ALTER TABLE supplier ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_9B2A6C7E77153098 ON supplier (code)');
        $this->addSql('DROP INDEX unq_supplierDocument_code ON supplierDocument');
        $this->addSql('ALTER TABLE supplierDocument ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Number/Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX unq_supplierDocument_code ON supplierDocument (fk_supplierDocumentType, code)');
        $this->addSql('DROP INDEX unq_travelBooking_code ON travelBooking');
        $this->addSql('ALTER TABLE travelBooking ADD code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Code\', DROP codePrefix, DROP codeNumber');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F42889FF77153098 ON travelBooking (code)');
    }
}
