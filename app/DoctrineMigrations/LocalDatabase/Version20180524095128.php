<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180524095128 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE supplierDocumentReceiptPayment CHANGE reference reference VARCHAR(64) DEFAULT NULL COMMENT \'Reference\'');
        $this->addSql('ALTER TABLE clientPaymentRequest CHANGE reference reference VARCHAR(64) DEFAULT NULL COMMENT \'Reference\'');
        $this->addSql('ALTER TABLE clientDocumentReceiptPayment CHANGE reference reference VARCHAR(64) DEFAULT NULL COMMENT \'Reference\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE clientDocumentReceiptPayment CHANGE reference reference VARCHAR(32) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Reference\'');
        $this->addSql('ALTER TABLE clientPaymentRequest CHANGE reference reference VARCHAR(128) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Reference\'');
        $this->addSql('ALTER TABLE supplierDocumentReceiptPayment CHANGE reference reference VARCHAR(32) DEFAULT NULL COLLATE utf8_unicode_ci COMMENT \'Reference\'');
    }
}
