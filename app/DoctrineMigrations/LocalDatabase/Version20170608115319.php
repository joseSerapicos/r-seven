<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170608115319 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientCurrentAccountDetail DROP FOREIGN KEY FK_F8D42B3BFF99627B');
        $this->addSql('ALTER TABLE travelBookingClientCurrentAccount DROP FOREIGN KEY FK_38D61ACCFF99627B');
        $this->addSql('ALTER TABLE travelBookingClientCurrentAccountDetail DROP FOREIGN KEY FK_4C977924D56D3949');
        $this->addSql('CREATE TABLE travelBookingClientDocument (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_travelBooking INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_F55E4BBEBF396750 (id), INDEX IDX_F55E4BBE9062FC3D (fk_travelBooking), UNIQUE INDEX UNIQ_F55E4BBE7264A4C9 (fk_clientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingClientInvoiceDocumentDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_travelBookingServicePrice INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', fk_clientInvoiceDocumentDetail INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_C8C78FE6BF396750 (id), INDEX IDX_C8C78FE6968646E0 (fk_travelBookingServicePrice), UNIQUE INDEX UNIQ_C8C78FE6FB5D6843 (fk_clientInvoiceDocumentDetail), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientDocument (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_client INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COMMENT \'Number/Code\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', comments VARCHAR(256) DEFAULT NULL COMMENT \'Comments\', storeLegalName VARCHAR(64) NOT NULL COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COMMENT \'Static entity country\', subTotal NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Sub total (total without VAT)\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_76A4D20BF396750 (id), INDEX IDX_76A4D2046421294 (fk_clientDocumentType), INDEX IDX_76A4D20E7EA6CC5 (fk_client), INDEX IDX_76A4D203EBA7B02 (fk_store), UNIQUE INDEX unq_clientDocument_code (fk_clientDocumentType, code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientInvoiceDocumentDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(256) NOT NULL COMMENT \'Description\', quantity SMALLINT UNSIGNED NOT NULL COMMENT \'Quantity\', value NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Value\', vatValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'VAT value\', subTotal NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total value without VAT\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_457BC141BF396750 (id), INDEX IDX_457BC1417264A4C9 (fk_clientDocument), INDEX IDX_457BC14111B2A7FE (fk_service), INDEX IDX_457BC141DB62DD09 (fk_vatCode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE supplierDocument (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_supplier INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COMMENT \'Number/Code\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', comments VARCHAR(256) DEFAULT NULL COMMENT \'Comments\', storeLegalName VARCHAR(64) NOT NULL COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COMMENT \'Static entity country\', subTotal NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Sub total (total without VAT)\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_supplierDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_D4327D42BF396750 (id), INDEX IDX_D4327D428B7CE372 (fk_supplierDocumentType), INDEX IDX_D4327D42A9022FA0 (fk_supplier), INDEX IDX_D4327D423EBA7B02 (fk_store), UNIQUE INDEX unq_supplierDocument_code (fk_supplierDocumentType, code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entityDocument (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_entity INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COMMENT \'Number/Code\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', comments VARCHAR(256) DEFAULT NULL COMMENT \'Comments\', storeLegalName VARCHAR(64) NOT NULL COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COMMENT \'Static entity country\', subTotal NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Sub total (total without VAT)\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_entityDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_C69A3B7EBF396750 (id), INDEX IDX_C69A3B7EC5336D7C (fk_entityDocumentType), INDEX IDX_C69A3B7E2E862CF8 (fk_entity), INDEX IDX_C69A3B7E3EBA7B02 (fk_store), UNIQUE INDEX unq_entityDocument_code (fk_entityDocumentType, code), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientReceiptDocumentDetailInvoice (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', value NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_321E6EA8BF396750 (id), INDEX IDX_321E6EA87264A4C9 (fk_clientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientReceiptDocumentDetailPayment (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', paymentType VARCHAR(16) NOT NULL COMMENT \'Payment type\', reference VARCHAR(32) DEFAULT NULL COMMENT \'Reference\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description\', value NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_CF53FDE1BF396750 (id), INDEX IDX_CF53FDE17264A4C9 (fk_clientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE travelBookingClientDocument ADD CONSTRAINT FK_F55E4BBE9062FC3D FOREIGN KEY (fk_travelBooking) REFERENCES travelBooking (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE travelBookingClientDocument ADD CONSTRAINT FK_F55E4BBE7264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE travelBookingClientInvoiceDocumentDetail ADD CONSTRAINT FK_C8C78FE6968646E0 FOREIGN KEY (fk_travelBookingServicePrice) REFERENCES travelBookingServicePrice (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE travelBookingClientInvoiceDocumentDetail ADD CONSTRAINT FK_C8C78FE6FB5D6843 FOREIGN KEY (fk_clientInvoiceDocumentDetail) REFERENCES clientInvoiceDocumentDetail (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE clientDocument ADD CONSTRAINT FK_76A4D2046421294 FOREIGN KEY (fk_clientDocumentType) REFERENCES clientDocumentType (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocument ADD CONSTRAINT FK_76A4D20E7EA6CC5 FOREIGN KEY (fk_client) REFERENCES client (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocument ADD CONSTRAINT FK_76A4D203EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail ADD CONSTRAINT FK_457BC1417264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail ADD CONSTRAINT FK_457BC14111B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail ADD CONSTRAINT FK_457BC141DB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE supplierDocument ADD CONSTRAINT FK_D4327D428B7CE372 FOREIGN KEY (fk_supplierDocumentType) REFERENCES supplierDocumentType (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE supplierDocument ADD CONSTRAINT FK_D4327D42A9022FA0 FOREIGN KEY (fk_supplier) REFERENCES supplier (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE supplierDocument ADD CONSTRAINT FK_D4327D423EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE entityDocument ADD CONSTRAINT FK_C69A3B7EC5336D7C FOREIGN KEY (fk_entityDocumentType) REFERENCES entityDocumentType (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE entityDocument ADD CONSTRAINT FK_C69A3B7E2E862CF8 FOREIGN KEY (fk_entity) REFERENCES entity (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE entityDocument ADD CONSTRAINT FK_C69A3B7E3EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice ADD CONSTRAINT FK_321E6EA87264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailPayment ADD CONSTRAINT FK_CF53FDE17264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('DROP TABLE clientCurrentAccount');
        $this->addSql('DROP TABLE clientCurrentAccountDetail');
        $this->addSql('DROP TABLE entityCurrentAccount');
        $this->addSql('DROP TABLE supplierCurrentAccount');
        $this->addSql('DROP TABLE travelBookingClientCurrentAccount');
        $this->addSql('DROP TABLE travelBookingClientCurrentAccountDetail');
        $this->addSql('ALTER TABLE clientDocumentType ADD type VARCHAR(16) NOT NULL COMMENT \'Nature of document\'');
        $this->addSql('ALTER TABLE entityDocumentType ADD type VARCHAR(16) NOT NULL COMMENT \'Nature of document\'');
        $this->addSql('ALTER TABLE supplierDocumentType ADD type VARCHAR(16) NOT NULL COMMENT \'Nature of document\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE travelBookingClientDocument DROP FOREIGN KEY FK_F55E4BBE7264A4C9');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail DROP FOREIGN KEY FK_457BC1417264A4C9');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice DROP FOREIGN KEY FK_321E6EA87264A4C9');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailPayment DROP FOREIGN KEY FK_CF53FDE17264A4C9');
        $this->addSql('ALTER TABLE travelBookingClientInvoiceDocumentDetail DROP FOREIGN KEY FK_C8C78FE6FB5D6843');
        $this->addSql('CREATE TABLE clientCurrentAccount (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_client INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Number/Code\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', storeLegalName VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity country\', totalVat NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', comments VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Comments\', subTotal NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Sub total (total without VAT)\', UNIQUE INDEX UNIQ_59F35017BF396750 (id), UNIQUE INDEX unq_clientCurrentAccount_code (fk_clientDocumentType, code), INDEX IDX_59F3501746421294 (fk_clientDocumentType), INDEX IDX_59F35017E7EA6CC5 (fk_client), INDEX IDX_59F350173EBA7B02 (fk_store), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientCurrentAccountDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Description\', quantity SMALLINT UNSIGNED NOT NULL COMMENT \'Quantity\', value NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Value\', vatValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'VAT value\', subTotal NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total value without VAT\', totalVat NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientCurrentAccount INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_F8D42B3BBF396750 (id), INDEX IDX_F8D42B3BFF99627B (fk_clientCurrentAccount), INDEX IDX_F8D42B3B11B2A7FE (fk_service), INDEX IDX_F8D42B3BDB62DD09 (fk_vatCode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entityCurrentAccount (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_entity INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Number/Code\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', storeLegalName VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity country\', totalVat NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_entityDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', comments VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Comments\', subTotal NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Sub total (total without VAT)\', UNIQUE INDEX UNIQ_FEEC62FBF396750 (id), UNIQUE INDEX unq_entityCurrentAccount_code (fk_entityDocumentType, code), INDEX IDX_FEEC62FC5336D7C (fk_entityDocumentType), INDEX IDX_FEEC62F2E862CF8 (fk_entity), INDEX IDX_FEEC62F3EBA7B02 (fk_store), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE supplierCurrentAccount (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_store INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_supplier INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', code VARCHAR(24) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Number/Code\', date DATE NOT NULL COMMENT \'Date of document\', dueDate DATE DEFAULT NULL COMMENT \'Due date of document\', storeLegalName VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store legal name\', storeTaxNumber VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store tax number\', storeStreet1 VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store street line 1\', storeStreet2 VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static store street line 2\', storeCity VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store city\', storePostCode VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store post code\', storeRegion VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static store region\', storeCountry VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static store country\', entityLegalName VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Legal Name\', entityTaxNumber VARCHAR(16) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Tax code\', entityStreet1 VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity street line 1\', entityStreet2 VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity street line 2\', entityCity VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity city\', entityPostCode VARCHAR(12) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity post code\', entityRegion VARCHAR(64) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity region\', entityCountry VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Static entity country\', totalVat NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_supplierDocumentType INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', comments VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Comments\', subTotal NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Sub total (total without VAT)\', UNIQUE INDEX UNIQ_3C98EAE4BF396750 (id), UNIQUE INDEX unq_supplierCurrentAccount_code (fk_supplierDocumentType, code), INDEX IDX_3C98EAE48B7CE372 (fk_supplierDocumentType), INDEX IDX_3C98EAE4A9022FA0 (fk_supplier), INDEX IDX_3C98EAE43EBA7B02 (fk_store), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingClientCurrentAccount (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_travelBooking INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_clientCurrentAccount INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_38D61ACCBF396750 (id), UNIQUE INDEX UNIQ_38D61ACCFF99627B (fk_clientCurrentAccount), INDEX IDX_38D61ACC9062FC3D (fk_travelBooking), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingClientCurrentAccountDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_travelBookingServicePrice INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', fk_clientCurrentAccountDetail INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_4C977924BF396750 (id), UNIQUE INDEX UNIQ_4C977924D56D3949 (fk_clientCurrentAccountDetail), INDEX IDX_4C977924968646E0 (fk_travelBookingServicePrice), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE clientCurrentAccount ADD CONSTRAINT FK_59F350173EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id)');
        $this->addSql('ALTER TABLE clientCurrentAccount ADD CONSTRAINT FK_59F3501746421294 FOREIGN KEY (fk_clientDocumentType) REFERENCES clientDocumentType (id)');
        $this->addSql('ALTER TABLE clientCurrentAccount ADD CONSTRAINT FK_59F35017E7EA6CC5 FOREIGN KEY (fk_client) REFERENCES client (id)');
        $this->addSql('ALTER TABLE clientCurrentAccountDetail ADD CONSTRAINT FK_F8D42B3B11B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id)');
        $this->addSql('ALTER TABLE clientCurrentAccountDetail ADD CONSTRAINT FK_F8D42B3BDB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id)');
        $this->addSql('ALTER TABLE clientCurrentAccountDetail ADD CONSTRAINT FK_F8D42B3BFF99627B FOREIGN KEY (fk_clientCurrentAccount) REFERENCES clientCurrentAccount (id)');
        $this->addSql('ALTER TABLE entityCurrentAccount ADD CONSTRAINT FK_FEEC62F2E862CF8 FOREIGN KEY (fk_entity) REFERENCES entity (id)');
        $this->addSql('ALTER TABLE entityCurrentAccount ADD CONSTRAINT FK_FEEC62F3EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id)');
        $this->addSql('ALTER TABLE entityCurrentAccount ADD CONSTRAINT FK_FEEC62FC5336D7C FOREIGN KEY (fk_entityDocumentType) REFERENCES entityDocumentType (id)');
        $this->addSql('ALTER TABLE supplierCurrentAccount ADD CONSTRAINT FK_3C98EAE43EBA7B02 FOREIGN KEY (fk_store) REFERENCES store (id)');
        $this->addSql('ALTER TABLE supplierCurrentAccount ADD CONSTRAINT FK_3C98EAE48B7CE372 FOREIGN KEY (fk_supplierDocumentType) REFERENCES supplierDocumentType (id)');
        $this->addSql('ALTER TABLE supplierCurrentAccount ADD CONSTRAINT FK_3C98EAE4A9022FA0 FOREIGN KEY (fk_supplier) REFERENCES supplier (id)');
        $this->addSql('ALTER TABLE travelBookingClientCurrentAccount ADD CONSTRAINT FK_38D61ACC9062FC3D FOREIGN KEY (fk_travelBooking) REFERENCES travelBooking (id)');
        $this->addSql('ALTER TABLE travelBookingClientCurrentAccount ADD CONSTRAINT FK_38D61ACCFF99627B FOREIGN KEY (fk_clientCurrentAccount) REFERENCES clientCurrentAccount (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE travelBookingClientCurrentAccountDetail ADD CONSTRAINT FK_4C977924968646E0 FOREIGN KEY (fk_travelBookingServicePrice) REFERENCES travelBookingServicePrice (id)');
        $this->addSql('ALTER TABLE travelBookingClientCurrentAccountDetail ADD CONSTRAINT FK_4C977924D56D3949 FOREIGN KEY (fk_clientCurrentAccountDetail) REFERENCES clientCurrentAccountDetail (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE travelBookingClientDocument');
        $this->addSql('DROP TABLE travelBookingClientInvoiceDocumentDetail');
        $this->addSql('DROP TABLE clientDocument');
        $this->addSql('DROP TABLE clientInvoiceDocumentDetail');
        $this->addSql('DROP TABLE supplierDocument');
        $this->addSql('DROP TABLE entityDocument');
        $this->addSql('DROP TABLE clientReceiptDocumentDetailInvoice');
        $this->addSql('DROP TABLE clientReceiptDocumentDetailPayment');
        $this->addSql('ALTER TABLE clientDocumentType DROP type');
        $this->addSql('ALTER TABLE entityDocumentType DROP type');
        $this->addSql('ALTER TABLE supplierDocumentType DROP type');
    }
}
