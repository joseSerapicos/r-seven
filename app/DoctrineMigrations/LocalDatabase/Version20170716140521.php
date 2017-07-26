<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170716140521 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentInvoiceRectification DROP FOREIGN KEY FK_93C8028A11B2A7FE');
        $this->addSql('ALTER TABLE clientDocumentInvoiceRectification DROP FOREIGN KEY FK_93C8028ADB62DD09');
        $this->addSql('DROP INDEX IDX_93C8028A11B2A7FE ON clientDocumentInvoiceRectification');
        $this->addSql('DROP INDEX IDX_93C8028ADB62DD09 ON clientDocumentInvoiceRectification');
        $this->addSql('ALTER TABLE clientDocumentInvoiceRectification DROP fk_service, DROP description, DROP quantity, DROP value, DROP vatValue, DROP subTotal, DROP totalVat, DROP fk_vatCode');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentInvoiceRectification ADD fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', ADD description VARCHAR(256) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Description\', ADD quantity SMALLINT UNSIGNED NOT NULL COMMENT \'Quantity\', ADD value NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Value\', ADD vatValue NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'VAT value\', ADD subTotal NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total value without VAT\', ADD totalVat NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL COMMENT \'Total VAT\', ADD fk_vatCode INT UNSIGNED NOT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE clientDocumentInvoiceRectification ADD CONSTRAINT FK_93C8028A11B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id)');
        $this->addSql('ALTER TABLE clientDocumentInvoiceRectification ADD CONSTRAINT FK_93C8028ADB62DD09 FOREIGN KEY (fk_vatCode) REFERENCES vatCode (id)');
        $this->addSql('CREATE INDEX IDX_93C8028A11B2A7FE ON clientDocumentInvoiceRectification (fk_service)');
        $this->addSql('CREATE INDEX IDX_93C8028ADB62DD09 ON clientDocumentInvoiceRectification (fk_vatCode)');
    }
}
