(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=[`public class PaymentService {
  @Autowired
  private TransactionRepository repo;

  public void processPayment(Payment p) {
    repo.save(p);
  }
}`,`@RestController
@RequestMapping("/api/banking")
public class BankingController {
  @GetMapping("/balance")
  public ResponseEntity getBalance() {
    return ResponseEntity.ok(
      service.getBalance()
    );
  }
}`,`@Configuration
@EnableEurekaClient
public class MicroserviceConfig {
  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }
}`,`@Entity
@Table(name = "transactions")
public class Transaction {
  @Id
  @GeneratedValue(
    strategy = GenerationType.IDENTITY
  )
  private Long id;

  @Column(nullable = false)
  private BigDecimal amount;
}`,`@Component
public class KafkaProducer {
  @Autowired
  private KafkaTemplate<String, Object>
    template;

  public void sendMessage(
    String topic, Object data
  ) {
    template.send(topic, data);
  }
}`];let a=0;const p=document.getElementById("code-display");function u(t,n,o=30){let i=0;return n.textContent="",new Promise(e=>{const r=setInterval(()=>{i<t.length?(n.textContent+=t.charAt(i),i++):(clearInterval(r),e())},o)})}async function l(){await u(c[a],p),await new Promise(t=>setTimeout(t,3e3)),a=(a+1)%c.length,l()}l();document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth",block:"start"})})});const d={threshold:.1,rootMargin:"0px 0px -100px 0px"},f=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.style.opacity="1",n.target.style.transform="translateY(0)")})},d);document.querySelectorAll(".timeline-item, .skill-category, .contact-item").forEach(t=>{t.style.opacity="0",t.style.transform="translateY(30px)",t.style.transition="opacity 0.6s ease, transform 0.6s ease",f.observe(t)});
