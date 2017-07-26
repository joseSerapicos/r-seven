<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170621233714 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE travelBookingClientInvoiceDocumentDetail DROP FOREIGN KEY FK_C8C78FE6FB5D6843');
        $this->addSql('CREATE TABLE travelBookingClientDocumentInvoiceDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_travelBookingServicePrice INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', fk_clientDocumentInvoiceDetail INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_ED9FEBF0BF396750 (id), INDEX IDX_ED9FEBF0968646E0 (fk_travelBookingServicePrice), UNIQUE INDEX UNIQ_ED9FEBF0DE050C55 (fk_clientDocumentInvoiceDetail), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientDocumentInvoiceDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(256) NOT NULL COMMENT \'Description\', quantity SMALLINT UNSIGNED NOT NULL COMMENT \'Quantity\', value NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'Value\', vatValue NUMERIC(10, 4) DEFAULT \'0\' NOT NULL COMMENT \'VAT value\', subTotal NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total value without VAT\', totalVat NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_6023A557BF396750 (id), INDEX IDX_6023A5577264A4C9 (fk_clientDocument), INDEX IDX_6023A55711B2A7FE (fk_service), INDEX IDX_6023A557DB62DD09 (fk_vatCode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientDocumentReceiptSettlement (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', value NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_invoiceClientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_94151714BF396750 (id), INDEX IDX_941517147264A4C9 (fk_clientDocument), INDEX IDX_94151714762B409D (fk_invoiceClientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientDocumentReceiptPayment (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', paymentType VARCHAR(16) NOT NULL COMMENT \'Payment type\', reference VARCHAR(32) DEFAULT NULL COMMENT \'Reference\', description VARCHAR(256) DEFAULT NULL COMMENT \'Description\', value NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_6C649235BF396750 (id), INDEX IDX_6C6492357264A4C9 (fk_clientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE travelBookingClientDocumentInvoiceDetail ADD CONSTRAINT FK_ED9FEBF0968646E0 FOREIGN KEY (fk_travelBookingServicePrice) REFERENCES travelBookingServicePrice (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE travelBookingClientDocumentInvoiceDetail ADD CONSTRAINT FK_ED9FEBF0DE050C55 FOREIGN KEY (fk_clientDocumentInvoiceDetail) REFERENCES clientDocumentInvoiceDetail (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE clientDocumentInvoiceDetail ADD CONSTRAINT FK_6023A5577264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentInvoiceDetail ADD CONSTRAINT FK_6023A55711B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentInvoiceDetail ADD CONSTRAINT FK_6023A557DB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentReceiptSettlement ADD CONSTRAINT FK_941517147264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentReceiptSettlement ADD CONSTRAINT FK_94151714762B409D FOREIGN KEY (fk_invoiceClientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE clientDocumentReceiptPayment ADD CONSTRAINT FK_6C6492357264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('DROP TABLE clientInvoiceDocumentDetail');
        $this->addSql('DROP TABLE clientReceiptDocumentDetailInvoice');
        $this->addSql('DROP TABLE clientReceiptDocumentDetailPayment');
        $this->addSql('DROP TABLE travelBookingClientInvoiceDocumentDetail');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE travelBookingClientDocumentInvoiceDetail DROP FOREIGN KEY FK_ED9FEBF0DE050C55');
        $this->addSql('CREATE TABLE clientInvoiceDocumentDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', description VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Description\', quantity SMALLINT UNSIGNED NOT NULL COMMENT \'Quantity\', value NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Value\', vatValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'VAT value\', subTotal NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total value without VAT\', totalVat NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total VAT\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_457BC141BF396750 (id), INDEX IDX_457BC1417264A4C9 (fk_clientDocument), INDEX IDX_457BC14111B2A7FE (fk_service), INDEX IDX_457BC141DB62DD09 (fk_vatCode), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientReceiptDocumentDetailInvoice (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', value NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', fk_invoiceClientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_321E6EA8BF396750 (id), INDEX IDX_321E6EA87264A4C9 (fk_clientDocument), INDEX IDX_321E6EA8762B409D (fk_invoiceClientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE clientReceiptDocumentDetailPayment (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', paymentType VARCHAR(16) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Payment type\', reference VARCHAR(32) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Reference\', description VARCHAR(256) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Description\', value NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Value\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_clientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_CF53FDE1BF396750 (id), INDEX IDX_CF53FDE17264A4C9 (fk_clientDocument), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE travelBookingClientInvoiceDocumentDetail (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', fk_travelBookingServicePrice INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', fk_clientInvoiceDocumentDetail INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', UNIQUE INDEX UNIQ_C8C78FE6BF396750 (id), UNIQUE INDEX UNIQ_C8C78FE6FB5D6843 (fk_clientInvoiceDocumentDetail), INDEX IDX_C8C78FE6968646E0 (fk_travelBookingServicePrice), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail ADD CONSTRAINT FK_457BC14111B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id)');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail ADD CONSTRAINT FK_457BC1417264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id)');
        $this->addSql('ALTER TABLE clientInvoiceDocumentDetail ADD CONSTRAINT FK_457BC141DB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id)');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice ADD CONSTRAINT FK_321E6EA87264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id)');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice ADD CONSTRAINT FK_321E6EA8762B409D FOREIGN KEY (fk_invoiceClientDocument) REFERENCES clientDocument (id)');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailPayment ADD CONSTRAINT FK_CF53FDE17264A4C9 FOREIGN KEY (fk_clientDocument) REFERENCES clientDocument (id)');
        $this->addSql('ALTER TABLE travelBookingClientInvoiceDocumentDetail ADD CONSTRAINT FK_C8C78FE6968646E0 FOREIGN KEY (fk_travelBookingServicePrice) REFERENCES travelBookingServicePrice (id)');
        $this->addSql('ALTER TABLE travelBookingClientInvoiceDocumentDetail ADD CONSTRAINT FK_C8C78FE6FB5D6843 FOREIGN KEY (fk_clientInvoiceDocumentDetail) REFERENCES clientInvoiceDocumentDetail (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE travelBookingClientDocumentInvoiceDetail');
        $this->addSql('DROP TABLE clientDocumentInvoiceDetail');
        $this->addSql('DROP TABLE clientDocumentReceiptSettlement');
        $this->addSql('DROP TABLE clientDocumentReceiptPayment');
    }
}
