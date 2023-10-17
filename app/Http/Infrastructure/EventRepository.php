<?php

namespace App\Http\Module\Product\Domain\Services\Repository;

use App\Http\Module\Product\Domain\Model\Event;

interface ProductRepositoryInterface
{
    public function save(Event $event);

}