<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170609205654 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice ADD fk_invoiceClientDocument INT UNSIGNED NOT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice ADD CONSTRAINT FK_321E6EA8762B409D FOREIGN KEY (fk_invoiceClientDocument) REFERENCES clientDocument (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_321E6EA8762B409D ON clientReceiptDocumentDetailInvoice (fk_invoiceClientDocument)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice DROP FOREIGN KEY FK_321E6EA8762B409D');
        $this->addSql('DROP INDEX IDX_321E6EA8762B409D ON clientReceiptDocumentDetailInvoice');
        $this->addSql('ALTER TABLE clientReceiptDocumentDetailInvoice DROP fk_invoiceClientDocument');
    }
}
