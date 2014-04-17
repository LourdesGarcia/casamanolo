<?php

namespace casamanolo\CasamanoloBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class HomeController extends Controller
{
    /**
     * @Route("/")
     * @Template
     */
    public function indexAction()
    {
        //return $this->render('CasamanoloBundle:Home:index.html.twig', array('name' => $name));
        return array();
    }
}
