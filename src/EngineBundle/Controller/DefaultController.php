<?php

namespace EngineBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/engine/test")
     */
    public function indexAction()
    {
        return $this->render('@Engine/Default/index.html.twig');
    }
}
